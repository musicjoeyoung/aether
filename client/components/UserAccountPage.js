import React, {Component, useState, useEffect, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import {setNewUser} from '../reducer/user'
import {connect} from 'react-redux'
import {motion} from 'framer-motion'

import {auth, fetchScene} from '../Firebase'
import Loading from './Loading'
import SignOut from './SignOut'
import BackgroundParticles from './Particles'
// import SoundShape from './SoundShape'
import {loadScene} from '../reducer/instruments'
import store from '../store'

//Component
const UserAccountPage = (props) => {
  const [user, loading, error] = useAuthState(auth) //user JSON
  const [currentUser, setcurrentUser] = useState(auth.currentUser)
  useEffect(() => {
    console.log('account props.user-->', props.user)
    console.log('account current-->', auth.currentUser)
    if (auth.currentUser) {
      props.setNewUser(user)
      props.loadScene()
    }
  }, [user])
  if (!user) return <Redirect to="/" />
  return (
    // <motion.div
    // 	exit={{ opacity: 0 }}
    // 	animate={{ opacity: 1 }}
    // 	initial={{ opacity: 0 }}
    // 	transition={{ duration: 1.5 }}
    <div id="accountdiv">
      {loading ? (
        <div style={{textAlign: 'center', marginTop: '15%', fontSize: '60px'}}>
          <BackgroundParticles />
          <h6>Welcome!</h6>
          <Loading />
        </div>
      ) : (
        <div style={{textAlign: 'center', marginTop: '15%', fontSize: '60px'}}>
          <BackgroundParticles />
          <h6>Welcome, {auth.currentUser.displayName}!</h6>

          {/* <SoundShape /> */}

          <Link to="/sesh">
            <button
              className={
                props.enableOutline
                  ? 'home-btn'
                  : 'no-outline-on-focus home-btn'
              }
              type="button"
              style={{textAlign: 'center', marginTop: '1%', marginRight: '1%'}}
            >
              {'<'} Join the World Stage
            </button>
          </Link>
          <Link to="/solo">
            <button
              className={
                props.enableOutline
                  ? 'home-btn'
                  : 'no-outline-on-focus home-btn'
              }
              type="button"
              style={{textAlign: 'center', marginTop: '1%', marginLeft: '1%'}}
            >
              Private Session {'>'}
            </button>
          </Link>
          <br />
          <SignOut setcurrentUser={setcurrentUser} />
        </div>
      )}
    </div>
  )
}

// Connect Redux
const mapStateToProps = (state) => ({user: state.user})
const mapDispatchToProps = (dispatch) => ({
  setNewUser: (user) => dispatch(setNewUser(user)),
  loadScene: () => dispatch(loadScene()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountPage)
