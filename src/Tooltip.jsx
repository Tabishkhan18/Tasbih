import React from 'react';

const Tooltip = () => {
    return (
        <div className="tooltip-container">
            <div className="relative">
                <div className="group peer relative z-10 p-1">
                    <svg width={30} height={30} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84 16.656-12.88 36.848-19.328 60.56-19.328 27.328 0 48.336 7.424 63.073 22.271 14.72 14.848 22.063 36.08 22.063 63.664 0 23.184-5.44 42.976-16.368 59.376-10.96 16.4-29.328 39.841-55.088 70.322-26.576 23.967-42.992 43.231-49.232 57.807-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336 2.975-11.184 11.504-23.823 25.568-37.888 30.224-29.152 54.496-57.664 72.88-85.551 18.336-27.857 27.52-58.593 27.52-92.193 0-46.88-14.176-83.408-42.577-109.568-28.416-26.176-68.272-39.248-119.568-39.248z"/></svg>
                </div>
                <div className="absolute left-1/2 w-64 -translate-x-1/2 rounded bg-neutral-400 p-3 text-sm opacity-0 before:absolute before:-bottom-2 before:left-1/2 before:size-4 before:-translate-x-1/2 before:rotate-45 before:bg-gray-400 peer-hover:bottom-[3.3rem] peer-hover:opacity-100 peer-hover:duration-500">
                    <ol className="text-start list-disc px-5">
                        <li>Haptic Feedback</li>
                        <li>Beeps on every 100th count</li>
                        <li>Dark UI to reduce eye strain</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Tooltip;
