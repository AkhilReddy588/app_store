import './index.css'

const Appitem = props => {
  const {appInfo} = props
  const {imageUrl, appName} = appInfo

  return (
    <div className="card">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="para">{appName}</p>
    </div>
  )
}

export default Appitem
