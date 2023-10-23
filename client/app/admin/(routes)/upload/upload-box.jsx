import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";

export function UploadBox() {
    const { register, handleSubmit, reset } = useForm();
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        accept: ".zip",
        onDropRejected: () => {
            toast.error("Please select a valid zip file.");
        },
    });

    const onSubmit = async (data) => {
        const { productId } = data;
        const file = acceptedFiles[0];

        if (file && productId) {
            const formData = new FormData();
            formData.append("zip_file", file);

            toast.loading("Uploading your file...");

            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/upload/${productId}`,
                    formData,
                    {
                        withCredentials: true,
                    }
                );

                if (response.status === 200) {
                    toast.dismiss();
                    toast.success(response.data.message);
                    reset();
                    acceptedFiles.length = 0;
                }
            } catch (error) {
                reset();
                console.log(error);

                toast.dismiss();
                toast.error("There was an error");
            }
        } else {
            toast.dismiss();
            toast.error("Please select a file and enter a product id.");
        }
    };

    // Define a function to render the file name and status
    const renderFile = (file) => {
        // Check if the file is valid
        if (file.type === "application/zip") {
            // Return a div with the file name and a green check icon
            return (
                <div className="flex items-center space-x-2">
                    <p className="text-lg font-medium">{file.name}</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            );
        } else {
            // Return a div with the file name and a red cross icon
            return (
                <div className="flex items-center space-x-2">
                    <p className="text-lg font-medium">{file.name}</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            );
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-center items-center gap-16"
            >
                <div className="flex flex-col gap-6 items-center justify-center">
                    <div
                        {...getRootProps()}
                        className="border-dashed border-4 p-8 rounded"
                    >
                        <input {...getInputProps()} />
                        <p className="text-lg font-medium text-center">
                            Drag and drop a zip file here, or click to select
                            one.
                        </p>
                    </div>
                    <div className="mt-4">
                        {acceptedFiles.length > 0 &&
                            renderFile(acceptedFiles[0])}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center space-x-4 mb-4">
                        <label
                            htmlFor="productId"
                            className="text-lg font-medium"
                        >
                            Product ID:
                        </label>
                        <input
                            type="text"
                            id="productId"
                            name="productId"
                            {...register("productId")}
                            className="shadow-md border rounded w-64 py-2 px-4"
                            placeholder="Enter the product id"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Upload File
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UploadBox;
