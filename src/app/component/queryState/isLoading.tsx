
import { WhiteBox } from '@/app/common/box/whiteBox';
import React from 'react';


const IsLoading: React.FC = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[50%] h-[320px] text-center">
                <WhiteBox>
                    <div className="flex gap-3 bold text-[16px] items-center">
                        <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" />
                        </div>
                        <div>
                            Loading. . .
                        </div>
                    </div>
                </WhiteBox>
            </div>
        </div>
    );
};

export default IsLoading;