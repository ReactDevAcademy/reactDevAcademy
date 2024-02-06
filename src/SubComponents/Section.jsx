import * as React from 'react';
import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import dashboardIcon from '../assets/icons/dashboard.svg';
import CustomersIcon from '../assets/icons/customers.svg';
import CustomersActiveIcon from '../assets/icons/customers-active.svg';

import RiskMonitor from '../assets/icons/risk-monitor.svg';
import ThresholdMonitor from '../assets/icons/threshold-monitor.svg';
import CaseManagement from '../assets/icons/case-management.svg';
import AlertManagement from '../assets/icons/alert-management.svg';
import TaskManagement from '../assets/icons/task-management.svg';
import Reports from '../assets/icons/reports.svg';
import Settings from '../assets/icons/settings.svg';
import IdentificationActive from '../assets/icons/Identification-active.svg';
import Identification from '../assets/icons/Identification.svg';

import Verification from '../assets/icons/Verification.svg';
import Screening from '../assets/icons/screening.svg';
import ScreeningActive from '../assets/icons/screening-active.svg'
import duedeligence from '../assets/icons/due-deligence.svg';
import duedeligenceActive from '../assets/icons/due-diligence-active.svg';

import alert from '../assets/icons/alert.svg';
import alertActive from '../assets/icons/alert-active.svg'
import Threshold from '../assets/icons/threshold-limits.svg';

import TransactionMonitor from '../assets/icons/transaction-monitor.svg';

import cases from '../assets/icons/cases.svg';
import tasks from '../assets/icons/tasks.svg';
import riskscore from '../assets/icons/risk-score.svg';
import riskscoreActive from '../assets/icons/risk-score-active.svg';

import chevronleft from '../assets/icons/chevron-left.svg';
import { useLocation, useNavigate } from 'react-router-dom';

import settingsIcon from '../assets/icons/settings.svg';
import settingsActiveIcon from '../assets/icons/settings-active.svg';

import Tooltip from '@mui/material/Tooltip';
import { validateHideFeature, validateLisenseFeature } from '../Utils/Constants';

export default function ListItems({ activePage, open
    , navSize
}) {

    const [showSubItem, setShowSubItem] = useState(false)
    const navigate = useNavigate();
    const customerId = localStorage.getItem('customerId')

    const location = useLocation();
    const isBaseUrlToHide = validateHideFeature();

    const [isDisableByLicense, setIsDisableByLicense] = useState(false);
    const validateLicense = validateLisenseFeature();

    useEffect(() => {
      
        if (validateLicense == 1) {
            setIsDisableByLicense(false)
        } else if (validateLicense == 2) {
            setIsDisableByLicense(true);
        } else if (validateLicense == 3) {
            setIsDisableByLicense(true);
        } else {
            setIsDisableByLicense(false)
        }
    }, [validateLicense])


    const profileMenu = [
        { title: 'Identification', icon: location.pathname.endsWith("/identification") ? IdentificationActive : Identification, navSize, active: location.pathname.endsWith("/identification") ? true : false, to: /${customerId}/identification, disabled: false },
        { title: 'Verification', icon: Verification, navSize, active: false, to: '', disabled: true },
        { title: 'Screening', icon: location.pathname.endsWith("/screening") ? ScreeningActive : Screening, navSize, active: location.pathname.endsWith("/screening") ? true : false, to: '/screening', disabled: true },
        { title: 'Due Diligence', icon: location.pathname.endsWith("/due-diligence") ? duedeligenceActive : duedeligence, navSize, active: location.pathname.endsWith("/due-diligence") ? true : false, to: /${customerId}/due-diligence, disabled: false },
        { title: 'Risk Score', icon: location.pathname.endsWith("/risk-score") ? riskscoreActive : riskscore, navSize, active: location.pathname.endsWith("/risk-score") ? true : false, to: /${customerId}/risk-score, disabled: false },
        { title: 'Threshold Limits', icon: Threshold, navSize, active: false, to: ``, disabled: true },
        { title: 'Alert', icon: location.pathname.endsWith("/alert") ? alertActive : alert, navSize, active: location.pathname.endsWith("/alert") ? true : false, to: '/alert', disabled: false },

        {
            title: 'Cases', icon: cases, navSize, active: location.pathname.endsWith('/cases') ? true : false, to: '/cases', disabled: false,
            subItem: [
                {
                    title: 'Periodic Review',
                    to: '/periodicReview/cases',
                    active: location.pathname === '/periodicReview/cases' ? true : false,
                },
                {
                    title: 'UT',
                },
                {
                    title: 'Other Case',
                    to: '/cases/other-case',
                    active: location.pathname === '/cases/other-case' ? true : false,
                }]
        },
        { title: 'Tasks', icon: location.pathname.endsWith("/tasks") ? tasks : tasks, navSize, navSize, active: location.pathname.endsWith("/tasks") ? true : false, to: /${customerId}/tasks, disabled: false },
    ]

    const mainMenu = [
        { title: 'Dashboard', icon: dashboardIcon, navSize, active: false, to: '/', disabled: true },
        { title: 'Customers', icon: location.pathname.startsWith("/customers-list") ? CustomersActiveIcon : CustomersIcon, navSize, active: location.pathname.startsWith("/customers-list") ? true : false, to: '/customers-list/customerlist', disabled: false },
        { title: 'Risk Monitor', icon: RiskMonitor, navSize, active: false, to: '', disabled: true },
        { title: 'Threshold Monitor', icon: ThresholdMonitor, navSize, active: false, to: '', disabled: true },
        { title: 'Transaction Monitor', icon: TransactionMonitor, navSize, active: location.pathname.startsWith("/transaction-monitor"), to: '/transaction-monitor', disabled: false },
        { title: 'Case Management', icon: CaseManagement, navSize, active: false, to: '', disabled: true },
        { title: 'Alert Management', icon: AlertManagement, navSize, active: false, to: '', disabled: true },
        { title: 'Task Management', icon: TaskManagement, navSize, active: false, to: '', disabled: true },
        { title: 'Reports', icon: Reports, navSize, active: false, to: '', disabled: true },
        {
            title: 'Settings', icon: location.pathname.startsWith('/settings') ? settingsActiveIcon : settingsIcon,
            navSize,
            active: location.pathname.startsWith('/settings') ? true : false,
            subItem: [
                {
                    title: 'Data Conversion',
                    to: '/settings/data-conversion',
                    active: location.pathname === '/settings/data-conversion' ? true : false,
                    disabled: isDisableByLicense
                },
                {
                    title: 'License Upload',
                    to: '/settings/license-upload',
                    active: location.pathname === '/settings/license-upload' ? true : false,
                    disabled: false
                },
                {
                    title: 'Risk Parameters',
                    to: '/settings/risk-parameters',
                    active: location.pathname === '/settings/risk-parameters' ? true : false,
                    disabled: isDisableByLicense

                },
                // {
                //     title: 'Risk Score',
                //     to: '/settings/risk-score-parameters',
                //     active: location.pathname === '/settings/risk-score-parameters' ? true : false,
                //     disabled: isDisableByLicense

                // }

            ]
        },
    ]

    const showSubItems = (items, title) => {
        if (items?.length > 0) {
            setShowSubItem(showSubItem ? false : true)
        }
        else setShowSubItem(false)
    }

    const handleSideBarClick = (data) => {
        showSubItems(data?.subItem, data.title)
        if (!data.disabled) {
            navigate(data?.to)
        }

    }

    return (
        <React.Fragment>
            <div>
                {activePage ? (
                    <>
                        {mainMenu.map((item, index) => (
                            <div key={index}>
                                <ListItemButton
                                    className={`list-btn ${item.active ? 'list-btn-active' : ''} ${item.disabled ? 'disabled' : ''}`}
                                    onClick={() => handleSideBarClick(item)}
                                >
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        {navSize === 'large' ? (
                                            <img src={item.icon} alt={item.title} />
                                        ) : (
                                            <Tooltip title={item.title}>
                                                <img src={item.icon} alt={item.title} />
                                            </Tooltip>
                                        )}
                                    </ListItemIcon>
                                    {open && (
                                        <p className={`list-btn-text ${item.active ? 'list-btn-text-active' : ''}`}>
                                            {item.title}
                                        </p>
                                    )}
                                </ListItemButton>
                                {showSubItem && navSize !== 'small' && item.subItem && (
                                    <div>
                                        {item.subItem.map((subMenu, subIndex) => (
                                            <p
                                                key={subIndex}
                                                className={`subMenu-text ${subMenu.disabled ? 'disable' : ''} ${subMenu.active ? 'subMenu-text-active' : 'subMenu-text-unactive'}`}
                                                onClick={() => { if (!subMenu.disabled) { navigate(subMenu.to) } }}
                                            >
                                                {subMenu.title}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <div className={open ? 'back-text' : 'back-text-margin'} onClick={() => navigate('/customers-list/customerlist')}>
                            <img src={chevronleft} alt="Back" />
                            {open && <p>Back to Mainmenu</p>}
                        </div>
                        {profileMenu.map((item, index) => (
                            <div key={index}>
                                <ListItemButton
                                    key={index}
                                    className={`list-btn ${item.active ? 'list-btn-active' : ''} ${item.disabled ? 'disabled' : ''}`}
                                    onClick={() => { if (!item.disabled) { handleSideBarClick(item) } }}
                                >
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        {navSize === 'large' ? (
                                            <img src={item.icon} alt={item.title} />
                                        ) : (
                                            <Tooltip title={item.title}>
                                                <img src={item.icon} alt={item.title} />
                                            </Tooltip>
                                        )}
                                    </ListItemIcon>
                                    {open && (
                                        <p className={`list-btn-text ${item.active ? 'list-btn-text-active' : ''}`}>
                                            {item.title}
                                        </p>
                                    )}
                                </ListItemButton>
                                {showSubItem && navSize !== 'small' && item.subItem && (
                                    <div>
                                        {item.subItem.map((subMenu, subIndex) => (
                                            <p
                                                key={subIndex}
                                                className={`subMenu-text ${subMenu.disabled ? 'disable' : ''} ${subMenu.active ? 'subMenu-text-active' : 'subMenu-text-unactive'}`}
                                                onClick={() => { if (!subMenu.disabled) { navigate(subMenu.to) } }}
                                            >
                                                {subMenu.title}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </React.Fragment>
    );
    


}