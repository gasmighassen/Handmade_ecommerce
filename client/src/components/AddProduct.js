import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";

import axios from "axios";
function AddProduct() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.product?.types);
  let [uploadedFiles, setuploadedFiles] = useState([]);
  const [upload, setupload] = useState([]);

  const [product, setproduct] = useState({
    ProdName: "",
    ProdType: "",
    thumbnail: "",
    Price: 0,
    brand: "",
  });

  const bar = document.getElementById("progress-bar");
  const progressDiv = document.getElementById("progress-div");

  //upload to cloud storage
  const handleDrop = async () => {
    progressDiv.style.display = "block";
    // Push all the axios request promise into a single array
    const uploaders = upload.map(async (file) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      // formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "etsy_clone"); // Replace the preset name with your own
      formData.append("api_key", "238588684128945"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      const config = {
        onUploadProgress: function (progressEvent) {
          const percentCompleted = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          bar.setAttribute("value", percentCompleted);
          bar.previousElementSibling.textContent = `${percentCompleted}%`;
          if (percentCompleted === 100) {
            bar.previousElementSibling.textContent = `Upload complete!`;
          }
        },
      };
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return await axios
        .post(
          "https://api.cloudinary.com/v1_1/dr7fhescc/upload",
          formData,
          config,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          const thumbnail = data.secure_url;

          setupload([]);
          setproduct((product.thumbnail = thumbnail));
          console.log(product);
          uploadedFiles.push(data);
          progressDiv.style.display = "none";
          dispatch(addProduct(product));
        });
    });
    // Once all the files are uploaded
    await axios.all(uploaders).then(async (result) => {
      // ... perform after upload is successful operation
    });
  };

  return (
    <div className="productAdd">
      <h3>Product title</h3>
      <input
        type="text"
        name="ProdName"
        onChange={(e) => setproduct({ ...product, ProdName: e.target.value })}
      />
      <h3>Brand</h3>
      <input
        type="text"
        name="ProdName"
        onChange={(e) => setproduct({ ...product, brand: e.target.value })}
      />
      <h5>
        Product Type
        <span className="required">*</span>
      </h5>

      <select
        className="ProdType"
        onChange={(e) => setproduct({ ...product, ProdType: e.target.value })}
      >
        <option selected></option>
        {types.map((el) => (
          <>
            <option value={el?._id}>{el?.ProdType}</option>
          </>
        ))}
      </select>
      <input
        type="number"
        name="price"
        onChange={(e) => setproduct({ ...product, Price: e.target.value })}
      />
      <h3>Select product images...</h3>
      <input
        type="file"
        onChange={(e) => {
          setupload(Object.values(e.target.files));
        }}
      />

      <button
        onClick={() => {
          handleDrop();
        }}
      >
        Add Product
      </button>
      <div id="progress-div" style={{ display: "none" }}>
        <label for="progress-bar">0%</label>
        <progress id="progress-bar" value="0" max="100"></progress>
      </div>
    </div>
  );
}

export default AddProduct;
