
import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function FacialExpression() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let stream;
    let interval;
    let active = true;

    async function init() {
      try {
        const MODEL_URL = "/models";

        console.log("Loading models...");

        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);

        if (!active) return;

        console.log("Models loaded");

        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (!active) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        const video = videoRef.current;
        video.srcObject = stream;

        await new Promise((resolve) => {
          video.onloadedmetadata = resolve;
        });

        await video.play();

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Keep the canvas in the same coordinate system as the video
        const videoSize = {
          width: video.videoWidth,
          height: video.videoHeight,
        };

        faceapi.matchDimensions(canvas, videoSize);

        console.log("Video dimensions:", videoSize);

        interval = setInterval(async () => {
          if (!active || video.readyState < 2) return;

          try {
            const detections = await faceapi
              .detectAllFaces(
                video,
                new faceapi.TinyFaceDetectorOptions({
                  inputSize: 416,
                  scoreThreshold: 0.3,
                })
              )
              .withFaceExpressions();

            if (!active) return;

            console.log("Faces detected:", detections.length);

            context.clearRect(0, 0, canvas.width, canvas.height);

            // Results and canvas both use the video's native dimensions
            faceapi.draw.drawDetections(canvas, detections);
            faceapi.draw.drawFaceExpressions(canvas, detections);
          } catch (error) {
            console.error("Detection failed:", error);
          }
        }, 300);
      } catch (error) {
        console.error("Initialization failed:", error);
      }
    }

    init();

    return () => {
      active = false;
      clearInterval(interval);

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "720px",
        height: "560px",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "720px",
          height: "560px",
          objectFit: "fill",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "720px",
          height: "560px",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
