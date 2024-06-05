"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export const ImageUpload = () => {

    const [imageUrl, setImageUrl] = useState('');

    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                if (result.event === 'success') {
                    //@ts-ignore
                    setImageUrl(result.info?.secure_url);
                    widget.close();
                }
            }}
            uploadPreset="quiosco-app"
            options={{
                maxFiles: 1
            }}>
            {
                ({ open }) => (
                    <>
                        <div className="">
                            <label className="">Imagen Producto</label>
                            <div className="flex align-center justify-content gap-25 mt-20" onClick={() => open()} style={{ cursor: 'pointer' }}>

                                {
                                    imageUrl ? (
                                        <div className="max-width center-text">
                                            <Image width={100} height={100} className="max-width auto-height" alt="Imagen de producto" src={imageUrl} style={{ objectFit: 'contain' }} />
                                        </div>) : (
                                        <>
                                            <TbPhotoPlus size={50} />
                                            <p className="bold f-size-18">Agregar imagen</p>
                                        </>
                                    )
                                }
                            </div>
                        </div>

                        <input type="hidden" name="image" value={imageUrl} />
                    </>
                )
            }
        </CldUploadWidget>
    )
}
