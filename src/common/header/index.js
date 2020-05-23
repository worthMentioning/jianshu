import React from 'react';
import { CSSTransition } from 'react-transition-group';
// import { GlobalStyle } from '../../statics/iconfont/iconfont';
import {connect} from 'react-redux';
import  {actionCreators} from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style'


const Header =(props)=>{
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active" >首页</NavItem>
        <NavItem className="left">下载App</NavItem>

        <NavItem className="right">登录</NavItem>
        <NavItem className="right"><span className="iconfont">&#xe602;</span></NavItem>
        <CSSTransition
          in={props.focused}
          timeout={300}
          classNames="slide"          
        >
          <SearchWrapper>
            <NavSearch className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
            <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e1;</i>
          </SearchWrapper>
          </CSSTransition>
      </Nav>
      <Addition>
        <Button className="writting"><span className="iconfont">&#xe6b0;</span>写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return{
    //把仓库里的数据映射到组件中 props 并重新命名为 focused 
    focused : state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
   // increment: () => dispatch({ type: 'INCREMENT' }),
   handleInputFocus(){
     const action =actionCreators.searchFocus()
     dispatch(action);
   },
   handleInputBlur(){
     const action =actionCreators.searchBlur()
     dispatch(action)
   }
  }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Header); 