import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';

export default function FooterAuthorDescription() {
    const {autorDescription} = useThemeConfig();
    return (<p className="footer__author_description">{autorDescription}</p>);
}