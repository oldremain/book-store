import React from 'react'

import s from './SignIn.module.scss'

const SignInError: React.FC = () => {
    return (
      <div className={s.signIn_error}>
          <span >Invalid email or password</span>
      </div>

    )
}

export default SignInError