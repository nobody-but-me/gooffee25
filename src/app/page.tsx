
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen p-5">
        <div className="w-full h-full p-5 flex row border-2 border-solid border-[var(--foreground)]">
	    <div className="w-full p-5 overflow-y-scroll border-2 border-solid border-[var(--foreground)]">
	        <div className="h-full">
	            Content
		</div>
		<div className="w-full h-80 border-2 border-solid border-[var(--foreground)]">
		    Footer
		</div>
	    </div>
	    <div id="navigator-panel" className="p-5 border-2 border-solid border-[var(--foreground)]">
	        Navigator
	    </div>
	    <div id="navigator-button" className="right-10 fixed p-5 pt-6 pb-6 rounded-full border-2 border-solid border-[var(--foreground)]">
	        {/* TODO: navigator button for mobile devices */}
	        Nav.
	    </div>
	</div>
    </div>
  );
}
