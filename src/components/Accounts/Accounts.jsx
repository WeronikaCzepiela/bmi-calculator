import './Accounts.scss'
import LinkedIn from './images/LinkedIn.png'
import GitHub from './images/GitHub.png'

export const Accounts = () => {
  return (
    <div className={'accounts'}>
      <p className={'accounts-text'}>Check my accounts</p>
      <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'}>
        <img src={GitHub} />
      </a>
      <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'}>
        <img src={LinkedIn} />
      </a>
    </div>
  )
}
