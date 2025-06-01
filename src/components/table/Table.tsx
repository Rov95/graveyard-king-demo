import Link from "next/link";

import Card from "../card/Card";

export default function Table() {
    return (
    <div className="grid grid-rows-3 grid-cols-3 gap-2 border-4 border-yellow-500 p-4 rounded-lg">
        <div className="col-span-3 text-center">Opponent's Hand</div>
        <div className="col-span-3 h-64 bg-green-600 flex items-center justify-center">
            <p className="text-xl">Card Grid Area</p>
        </div>
        <div className="col-span-3 text-center mt-4">Your Hand</div>
            <Card />
        <Link href="/" className="col-span-1 h-64 bg-blue-600 flex items-center justify-center">
            <p className="text-xl">RETUUUURN</p>
        </Link>
    </div>
    )
}