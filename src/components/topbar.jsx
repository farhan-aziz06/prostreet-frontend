import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Topbar = ({ icon, title, buttonIcon, button, href }) => {
    return (
        <div className="flex items-center justify-between text-white">
            {/* Heading Group: Render only if `title` or `icon` is truthy */}
            {(icon || title) && (
                <div className="flex items-center gap-5">
                    {icon && <span>{icon}</span>}
                    {title && (
                        <h1 className="text-2xl font-semibold text-center">
                            {title}
                        </h1>
                    )}
                </div>
            )}

            {/* Button Group: Render only if `button` or `buttonIcon` is truthy */}
            {(button || buttonIcon) && (
                <div>
                    {href ? (
                        <Link href={href}>
                            <button className="bg-custom-primaryColor rounded-lg px-5 py-3 flex items-center gap-4">
                                {buttonIcon && <span>{buttonIcon}</span>}
                                {button && (
                                    <h2 className="text-xl font-semibold">
                                        {button}
                                    </h2>
                                )}
                            </button>
                        </Link>
                    ) : (
                        <button className="bg-custom-primaryColor rounded-lg px-5 py-3 flex items-center gap-4">
                            {buttonIcon && <span>{buttonIcon}</span>}
                            {button && (
                                <h2 className="text-xl font-semibold">
                                    {button}
                                </h2>
                            )}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Topbar;
