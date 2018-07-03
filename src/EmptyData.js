import React from 'react';
import classnames from 'classnames';
import i18n from './i18n';

import './style/ie8.scss';
import './style/EmptyData.scss';

const { PropTypes } = React;
const i18nDefault = 'zh-cn';

export default class EmptyData extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    lang: PropTypes.string,
    icon: PropTypes.string,
    prefixCls: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    children: i18n[i18nDefault].description,
    lang: i18nDefault,
    iconSmall: '//cdn.ewt360.com/ewt360/images/images/searchno.jpg?t=201806222330',
    icon: '//cdn.ewt360.com/ewt360/images/images/searchno.jpg?t=201806222330',
    iconLarge: '//cdn.ewt360.com/ewt360/images/images/searchno.jpg?t=201806222330',
    prefixCls: 'eui-empty-data',
    theme: 'default',
    style: {},
    className: '',
    type: 'medium'
  };

  render() {
    const {
      prefixCls,
      children,
      icon,
      iconSmall,
      iconLarge,
      style,
      type,
      className,
      ...others,
    } = this.props;

    const iconMap = {
      small: iconSmall,
      medium: icon,
      large: iconLarge,
    };

    return (
      <div
        {...others}
        className={classnames({ [prefixCls]: true }, { [className]: !!className })}
        style={style}
      >
        <div
          className={`${prefixCls}-icon`}
          style={{
            backgroundImage: `url(${iconMap[type]})`,
          }}
        />
        <div className={`${prefixCls}-content`}>
          {children}
        </div>
      </div>
    );
  }
}
