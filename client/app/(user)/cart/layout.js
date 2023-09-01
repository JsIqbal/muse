"use client";

import { useEffect, useState } from "react";

const CartLayout = ({ children }) => {
    const [isHydrated, setIsHydrated] = useState(false);

    //Wait till NextJS rehydration completes
    useEffect(() => {
        setIsHydrated(true);
    }, []);
    return (
        <>
            {isHydrated ? (
                <div className="w-full h-max">{children}</div>
            ) : (
                <div className="w-full h-full flex justify-center items-center">
                    <span
                        style={{ animationDuration: "3s" }}
                        className="w-16 h-16 border-[6px] border-dashed border-blue-700 rounded-full animate-spin"
                    ></span>
                </div>
            )}
        </>
    );
};

export default CartLayout;
