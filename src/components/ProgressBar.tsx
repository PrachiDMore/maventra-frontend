import React from 'react'

const ProgressBar = ({ className, progress, showProgress, color }: { className: string, progress: number, showProgress: boolean, color: string }) => {
	return (
		<div className={"items-center flex gap-x-2 " + className}>
			<div className="w-full h-1 rounded-full bg-secondary/30 relative overflow-hidden">
				<span style={{ '--tw-progress-width': `${progress}%`, backgroundColor: color } as React.CSSProperties} className="h-full absolute top-0 left-0 rounded-full animate-grow"></span>
			</div>
			{showProgress && <p style={{
				color: color
			}} className="text-xs font-medium">{progress}%</p>}
		</div>
	)
}

export default ProgressBar