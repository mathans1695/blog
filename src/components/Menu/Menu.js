import React, { useState } from 'react';
import plus from "../../images/plus.svg"
import './Menu.css';

function Menu({left, top, width}) {
	function handleClick(e) {
		const selection = document.getSelection();
		
		const range = selection.getRangeAt(0).cloneRange();
		console.log(range.toString());
	}
	
	return (
		<div 
			className='Menu' 
			style={{'left': `${left}px`, 'top': `${top}px`, 'width': `${width}px`}}
		>
			<div className='SubMenu__1'>
				<div 
					className='bold Menu--item'
					onClick={handleClick}
				>
					<svg 
						height="1792" 
						viewBox="0 0 1792 1792" 
						width="1792" 
						className="svg"
					>
						<path 
							d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"
						/>
					</svg>
				</div>
				<div className='italics Menu--item'>
					<svg 
						enableBackground="new 0 0 48 48" 
						height="48px" 
						id="Layer_3" 
						version="1.1" 
						viewBox="0 0 48 48" 
						width="48px" 
						xmlSpace="preserve"
						className="svg"
					>
						<path 
							d="M22.066,44.07c0,0.661,0.149,1.168,0.446,1.521c0.299,0.353,0.767,0.602,1.405,0.744c0.64,0.144,1.543,0.237,2.712,0.281   l-0.265,1.355c-2.116-0.133-4.982-0.199-8.597-0.199c-3.77,0-6.646,0.066-8.63,0.199l0.363-1.355   c1.587-0.066,2.778-0.243,3.572-0.529c0.793-0.287,1.427-0.82,1.901-1.604c0.474-0.782,0.931-2.012,1.372-3.687l8.928-33.594   c0.375-1.433,0.562-2.513,0.562-3.24c0-0.684-0.153-1.201-0.463-1.554c-0.309-0.353-0.776-0.601-1.405-0.744   c-0.628-0.144-1.526-0.237-2.694-0.281l0.331-1.355c1.851,0.132,4.717,0.198,8.596,0.198c3.638,0,6.525-0.066,8.663-0.198   l-0.33,1.355c-1.653,0.066-2.883,0.242-3.687,0.529C34.04,2.199,33.401,2.729,32.928,3.5s-0.931,2.006-1.372,3.703l-8.928,33.594   C22.254,42.252,22.066,43.343,22.066,44.07z"
						/>
					</svg>
				</div>
				<div className='link Menu--item'>
					<svg 
						version="1.1" 
						id="Capa_1" 
						xmlns="http://www.w3.org/2000/svg" 
						xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 512 512" 
						style={{"enableBackground": "new 0 0 512 512"}} 
						xmlSpace="preserve"
						className="svg"
					>
						<g>
							<g>
								<path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className="SubMenu__2">
				<div className='h3 Menu--item'>
					<svg 
						version="1.1" 
						id="Capa_1" 
						xmlns="http://www.w3.org/2000/svg" 
						xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 512 512" 
						style={{"enableBackground": "new 0 0 512 512"}} 
						xmlSpace="preserve"
						className="svg"
					>
						<g>
							<g>
								<path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
							</g>
						</g>
					</svg>
				</div>
				<div className='h4 Menu--item'>
					<svg 
						version="1.1" 
						id="Capa_1" 
						xmlns="http://www.w3.org/2000/svg" 
						xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 512 512" 
						style={{"enableBackground": "new 0 0 512 512"}} 
						xmlSpace="preserve"
						className="svg"
					>
						<g>
							<g>
								<path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
							</g>
						</g>
					</svg>
				</div>
				<div className='blockquote Menu--item'>
					<svg 
						version="1.1" 
						id="Capa_1" 
						xmlns="http://www.w3.org/2000/svg" 
						xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 512 512" 
						style={{"enableBackground": "new 0 0 512 512"}} 
						xmlSpace="preserve"
						className="svg"
					>
						<g>
							<g>
								<path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className="bottom__style">
			</div>
		</div>
	)
}

export default Menu;