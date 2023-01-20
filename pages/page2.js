import styles from '../styles/page6.module.css'
export default function Home(){
	return(
		<div className={styles.box}>
    <h1>Prep Times</h1>
    <h2>Headline</h2>
    <h3>Article 1</h3>
    <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>
    <h3>Article 2</h3>
    <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>
		<style jsx>
		{`
		h1{
		border-bottom: 1px solid #999;
  padding-bottom: 5px;
  text-align: center;
  }
  `}
		</style>
		</div>

	);
}
