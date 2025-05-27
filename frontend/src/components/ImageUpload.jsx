import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import DetectedResult from "./DetectResult";
import * as tf from "@tensorflow/tfjs";

const Spinner = () => (
  <svg
    className="animate-spin h-6 w-6 text-orange-400 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [detectedTrash, setDetectedTrash] = useState({
    type: "",
    usage: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const webcamRef = useRef(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setShowResult(false);
      setImage({
        file,
        url: URL.createObjectURL(file),
      });
    }
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage({
      file: null,
      url: imageSrc,
    });
    setShowResult(false);

    setTimeout(() => {
      setShowCamera(false);
    }, 500);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDetect = async () => {
    if (!image?.url) {
      alert("Silakan unggah atau ambil foto terlebih dahulu.");
      return;
    }

    setIsLoading(true);
    setShowResult(false);

    try {
      const model = await tf.loadGraphModel("/models/model.json");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = image.url;

      img.onload = async () => {
        const input = tf.browser
          .fromPixels(img)
          .resizeNearestNeighbor([224, 224])
          .toFloat()
          .div(255.0)
          .expandDims(0);

        const output = await model.predict(input); // Tensor
        const data = await output.data(); // Float32Array
        console.log("Output data:", data);

        const labels = [
          "elektronik",
          "kaca",
          "kardus",
          "kayu",
          "kertas",
          "logam",
          "makanan",
          "pakaian",
          "plastik",
        ];

        const pointsMap = {
          elektronik: 100,
          kaca: 5,
          kardus: 20,
          kayu: 7,
          kertas: 10,
          logam: 300,
          makanan: 10,
          pakaian: 10,
          plastik: 20,
        };

        const maxVal = Math.max(...data);
        const maxIdx = data.indexOf(maxVal);
        const label = labels[maxIdx];
        const points = pointsMap[label] || 0;

        setDetectedTrash({
          type: label,
          usage: `Jenis sampah: ${label} dapat ditangani dengan cara yang sesuai.`,
          points: points,
        });

        setShowResult(true);
        setIsLoading(false);
      };
    } catch (error) {
      console.error("Deteksi gagal:", error.message, error.stack);
      alert("Terjadi kesalahan saat mendeteksi gambar: " + error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl container p-10">
      <h2 className="text-left text-sm font-semibold mb-2">Tambah foto</h2>

      <div className="border-2 border-dashed border-[#8F8F8F] rounded-md p-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div
            onClick={handleUploadClick}
            className="flex-1 bg-white border border-[#CCCCCC] rounded-md py-10 flex flex-col items-center justify-center cursor-pointer"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-2 text-[#27667B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            <p className="font-medium text-sm text-[#8F8F8F]">Pilih Foto</p>
          </div>

          <div
            onClick={() => setShowCamera(true)}
            className="flex-1 bg-white border border-[#CCCCCC] rounded-md py-10 flex flex-col items-center justify-center cursor-pointer"
          >
            {!showCamera ? (
              <button className="text-[#27667B] font-medium text-sm hover:underline flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7h2l2-3h10l2 3h2a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z"
                  />
                  <circle
                    cx="12"
                    cy="13"
                    r="4"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                </svg>
                Buka Kamera
              </button>
            ) : (
              <>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="rounded mb-5 px-5"
                />
                <button
                  onClick={capturePhoto}
                  className="bg-[#27667B] text-white px-4 py-1 rounded hover:scale-105 transition"
                >
                  Ambil Foto
                </button>
              </>
            )}
          </div>
        </div>

        {image && (
          <div className="mt-4">
            <img
              src={image.url}
              alt="Preview"
              className="w-full max-h-[300px] object-contain rounded"
            />
            {image.file && (
              <p className="text-sm mt-2 text-left text-gray-600">
                {image.file.name}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col items-end my-6 space-y-2">
        <button
          onClick={handleDetect}
          disabled={isLoading}
          className={`bg-orange-400 text-white font-medium px-6 py-2 rounded hover:scale-105 transition flex items-center justify-center ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#BF9264]"
          }`}
        >
          {isLoading ? (
            <>
              <Spinner />
              <span className="ml-2">Memindai...</span>
            </>
          ) : (
            "Deteksi"
          )}
        </button>
      </div>

      {showResult && (
        <DetectedResult image={image.url} result={detectedTrash}/>
      )}
    </div>
  );
};

export default ImageUpload;
