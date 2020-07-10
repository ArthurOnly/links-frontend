import {useEffect} from 'react'
import {getToken} from '../../helpers/account'

import {connect} from 'react-redux'
import {refreshToken} from '../../actions/account.actions'

const TokenRefresher = ({refreshToken}) => {
    const TRESHOLD = 30
    const calculate = () => {
        const token = getToken()

        try{
            const [,payload] = token.split('.')
    
            const data = JSON.parse(atob(payload))
            const expires = data.exp
            const secondsToExpire = expires - (Date.now()/1000)
    
            return secondsToExpire
        }
        catch{
            return 0
        }
    }

    useEffect(()=>{
        const secondsToExpire = calculate() - TRESHOLD
        const timeOut = setTimeout(refreshToken(),secondsToExpire * 1000)
        return () => clearTimeout(timeOut)
    },[refreshToken])

    return null
}

const mapStateToProps = state => {
    return {account: state.account.account}
}


export default connect(mapStateToProps,{refreshToken})(TokenRefresher)