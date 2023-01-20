import styles from '../styles/page6.module.css'
export default function Home(){
	return(
		<div className={styles.box}>
		<div className={styles.before}>
    <h1>Prep Times</h1>
    <h2>Headline</h2>
    <h3>Article 1</h3>
    <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>
    <h3>Article 2</h3>
    <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>


		 <style jsx>
        {`
          h1 {
            color: #333;
	    font-family: serif;
	    margin: 0;
	    padding: 0;
          }
	  h2{
	  font-family: serif;
	  margin: 10px 0;
	 }
	 h3 {
	 font-family: serif;
	 margin: 5px 0;
	 }
	 p{
	 font-family: serif;
	 font-size: 14px
	 letter-spacing: 1px;
	 line-height: 20px;
	 }
	 box h1{
	 border-bottom: 1px solid #999;
  padding-bottom: 5px;
  text-align: center;

  box h2{
  margin: 10px 0;
  }
  box h3{
  margin: 5px 0;
  }
  box p{
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 20px;
  }
        `}
      </style>
		</div>
		</div>
	)
}
