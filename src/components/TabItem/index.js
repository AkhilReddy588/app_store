import './index.css'

const TabItem = props => {
  const {tabInfo, onClickTab, isActive} = props
  const {displayText, tabId} = tabInfo

  const onTab = () => {
    onClickTab(tabId)
  }
  const activeTabStyle = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabStyle}`}
        onClick={onTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
