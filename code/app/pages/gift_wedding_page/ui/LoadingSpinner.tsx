import React from 'react';

export const LoadingSpinner = () => (
    <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        <p className="mt-4 text-lg text-stone-600">Carregando lista de presentes...</p>
    </div>
);