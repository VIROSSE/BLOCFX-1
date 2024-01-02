"use client"

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 500;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <div className="flex justify-center items-center relative">
            {isVisible && (
                <Button
                    onClick={goToBtn}
                    className="top-btn backdrop-blur-sm desktop-header-gradient-background hover:bg-gray-800 right-9 bottom-9 md:right-20  shadow-2xl "
                >
                    <ArrowUp className="" size={30} />
                </Button>
            )}
        </div>
    );
};


export default GoToTop;