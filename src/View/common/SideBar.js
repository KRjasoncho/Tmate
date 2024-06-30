import React from 'react';
import classes from "../../Style/common/SideBar.module.css"
import {Link} from "react-router-dom";
import {Observer, useLocalObservable} from "mobx-react";
import CommonStore from "../../Store/CommonStore";

const SideBar = () => {
  const commonStore = useLocalObservable(() => new CommonStore());
  return (
    <Observer>
      {() => (
        <div className={`${classes.sideBarWrapper} ${commonStore.extentFlag && classes.extentSideBarWrapper}`}>
          <div className={classes.iconContainer}>
            <div onClick={commonStore.sideBarExtentHandler}>
              <img src='/menu.svg'
                   alt='menu'
                   className={`${classes.menuIcon}`}/>
            </div>
          </div>
          <div className={classes.midWrapper}>
            <Link to={'/'} className={classes.link}>
              <div className={classes.iconContainer}>
                <img src='/home.svg'
                     alt='home'
                     className={classes.homeIcon}/>
                <div className={`${classes.homeText} ${!commonStore.extentFlag && classes.displayNone}`}>{commonStore.extentFlag && '홈'}</div>
              </div>
            </Link>

            <Link to={'/studentMain'} className={classes.link} >
              <div className={classes.iconContainer}>
                <img src='/student.svg'
                     alt='student'
                     className={classes.studentIcon}/>
                <div
                  className={`${classes.studentText} ${!commonStore.extentFlag && classes.displayNone}`}>{commonStore.extentFlag &&'학생 관리'}</div>
              </div>
            </Link>

            <Link to={'/adminMain'} className={classes.link}>
              <div className={classes.iconContainer}>
                <img src='/admin.svg'
                     alt='admin'
                     className={classes.adminIcon}/>
                <div className={`${classes.adminText} ${!commonStore.extentFlag && classes.displayNone}`}>{commonStore.extentFlag &&'계정 관리'}</div>
              </div>
            </Link>
          </div>
          <Link to={'/settingMain'} className={classes.link}>
            <div className={classes.iconContainer}>
              <img src='/setting.svg'
                   alt='setting'
                   className={classes.settingIcon}/>
              <div className={`${classes.settingText} ${!commonStore.extentFlag && classes.displayNone}`}>{commonStore.extentFlag &&'설정'}</div>
            </div>
          </Link>
        </div>
      )}
    </Observer>
  );
};

export default SideBar;