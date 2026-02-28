import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingOverlay = () => {
    return (
        <div className="loading-wrapper">
            <div className="loading-shadow-wrapper">
                <div className="loading-shadow">
                    <Loader2 className="loading-animation w-12 h-12 text-[#663820]" />
                    <div className="text-center space-y-2">
                        <h2 className="loading-title">Synthesizing Your Book</h2>
                        <p className="text-[#8B7355]">This may take a few moments...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
