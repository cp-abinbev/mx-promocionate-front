import { useEffect, useState } from "react"

const useSpinnerLoading = ({ promiseInProgress }) => {
  const [styledActive, setStyledActive] = useState("auto")

  useEffect(() => {
    if (document && document.getElementsByTagName("body")[0]) {
      document.getElementsByTagName("body")[0].style.overflowY = styledActive
      setStyledActive(promiseInProgress ? "hidden" : "auto")
    }
  }, [promiseInProgress, styledActive])
}

export default useSpinnerLoading
