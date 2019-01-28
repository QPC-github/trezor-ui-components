import React from 'react';
import styled from 'styled-components';
import { connect, bindActionCreators } from 'react-redux';
import colors from 'config/colors';
import { H2 } from 'components/Heading';
import ReactJson from 'react-json-view';
import Icon from 'components/Icon';
import P from 'components/Paragraph';

import * as LogActions from 'actions/LogActions';
import icons from 'config/icons';

const Wrapper = styled.div`
    position: relative;
    color: ${colors.INFO_PRIMARY};
    background: ${colors.INFO_SECONDARY};
    padding: 24px 48px;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
`;

const Click = styled.div`
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;
    padding: 12px;
    color: inherit;
    transition: opacity 0.3s;

    &:active,
    &:hover {
        opacity: 0.6;
        color: inherit;
    }
`;

const StyledParagraph = styled(P)`
    margin: 10px 0;
`;

const LogWrapper = styled.div`
    background: white;
    padding: 25px;
    height: 300px;
    overflow: scroll;
`;

const Log = (props) => {
    if (!props.log.opened) return null;
    return (
        <Wrapper>
            <Click onClick={props.toggle}>
                <Icon
                    size={25}
                    color={colors.INFO_PRIMARY}
                    icon={icons.CLOSE}
                />
            </Click>
            <H2>Log</H2>
            <StyledParagraph isSmaller>
                Attention: The log contains your XPUBs. Anyone with your XPUBs
                can see your account history.
            </StyledParagraph>
            <LogWrapper>
                <ReactJson src={props.log.entries} />
            </LogWrapper>
        </Wrapper>
    );
};

export default connect(
    state => ({
        log: state.log,
    }),
    dispatch => ({
        toggle: bindActionCreators(LogActions.toggle, dispatch),
    }),
)(Log);