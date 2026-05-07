export default function UploadVector (){
    return(
        <>
        <div className="container upload-page">

            <div className="upload-container">

                <h2 className="upload-title">Upload Vector</h2>

                <form className="upload-form">

                    {/* TITLE */}
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter vector title..."
                    />

                    {/* DESCRIPTION */}
                    <label>Description</label>
                    <textarea
                        name="description"
                        rows="5"
                        placeholder="Write short description..."
                    ></textarea>

                    {/* VECTOR URL */}
                    <label>Vector File URL (EPS / SVG / AI)</label>
                    <input
                        type="text"
                        name="vectorUrl"
                        placeholder="https://example.com/vector.svg"
                    />

                    {/* PREVIEW IMAGE */}
                    <label>Preview Image URL (JPG / PNG)</label>
                    <input
                        type="text"
                        name="previewImageUrl"
                        placeholder="https://example.com/image.jpg"
                    />

                    {/* IMAGE PREVIEW */}
                    <div className="preview-box">
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="preview"
                        />
                    </div>

                    {/* CATEGORY */}
                    <label>Category</label>
                    <select name="category">
                        <option value="">Select category</option>
                        <option value="Logo">Logo</option>
                        <option value="Icon">Icon</option>
                        <option value="Illustration">Illustration</option>
                        <option value="Background">Background</option>
                        <option value="3D">3D</option>
                        <option value="Pattern">Pattern</option>
                    </select>

                    {/* TAGS */}
                    <label>Tags</label>
                    <input
                        type="text"
                        name="tags"
                        placeholder="nature, business, modern..."
                    />

                    {/* ACTIONS */}
                    <div className="upload-actions">
                        <button type="submit" className="upload-btn">
                            Upload Vector
                        </button>

                        <button type="button" className="cancel-btn">
                            Cancel
                        </button>
                    </div>

                </form>

            </div>

        </div>
        </>
    )
}