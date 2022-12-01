import React from 'react';
import { Link } from 'react-router-dom';
import './Frame.style.css';
import IconLogo from '../../components-layout/Iconlogo/IconLogo';
import { ReactComponent as Main } from '../../assets/svg/home.svg';
import { ReactComponent as Message } from '../../assets/svg/message.svg';
import { ReactComponent as Call } from '../../assets/svg/call.svg';
import { ReactComponent as Contact } from '../../assets/svg/contact.svg';
import { ReactComponent as Calender } from '../../assets/svg/calender.svg';
import { ReactComponent as Setting } from '../../assets/svg/setting.svg';


const Frame = () => {

    const sideIcons = [
        {
            title:
                <IconLogo>
                    <Main />
                </IconLogo>,
            href: '/MainContainer'
        },
        {
            title:
                <IconLogo>
                    <Message />
                </IconLogo>,
            href: '/Messages'
        },
        {
            title:
                <IconLogo>
                    <Call />
                </IconLogo>,href: '/Logs'
        },
        {
            title:
                <IconLogo>
                    <Contact />
                </IconLogo>,
            href: '/Contacts'
        },
        {
            title:
                <IconLogo>
                    <Calender />
                </IconLogo>,
            href: '/Calender'
        },
        {
            title:
                <IconLogo>
                    <Setting />
                </IconLogo>,
            href: '/Settings'
        },
    ]



    return (
        <React.Fragment>

            <div className='frame'>
                <div className='Frame__header'>

                    <ul className='Frame__side__bar'>
                        {sideIcons.map((icon) => (
                            <li key={icon.title}>
                                <Link to={icon.href}>{icon.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className='Frame__top__bar'/>

                </div>
            </div>

        </React.Fragment>
    )
}

export default Frame;