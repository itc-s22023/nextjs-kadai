import Link from 'next/link'
export default function Home(){

	return (
		<>
		<header>HAE</header>
		<main>
		<div>
		<ul>
		<li>
		<Link href="page1">
		Webページ
		</Link>
		</li>
		</ul>
		<ul>
		<li>
		<Link href="page2">
		新聞
		</Link>
		</li>
		</ul>
		<ul>
		<li>
		<Link href="page3">
		popなメニュー
		</Link>
		</li>
		</ul>
		<ul>
		<li>
		<Link href="page4">
		斜め型box
		</Link>
		</li>
		</ul>
		<ul>
		<li>
		<Link href="page5">
	         ナビゲーション	
		</Link>
		</li>
		</ul>

		<h1>cube</h1>
		<p>合うおｔ</p>
		</div>
		</main>

		<footer>Foorer</footer>
		</>
	)
}
