import React from 'react';
import classnames from 'classnames';
import i18n from './i18n';

import './style/index.scss';

const { PropTypes } = React;
const i18nDefault = 'zh-cn';

export default class EmptyData extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    lang: PropTypes.string,
    icon: PropTypes.string,
    iconSmall: PropTypes.string,
    iconLarge: PropTypes.string,
    prefixCls: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    children: i18n[i18nDefault].description,
    lang: i18nDefault,
    iconSmall: '//yukap6.github.io/images/empty.png',
    icon: '//yukap6.github.io/images/empty.png',
    iconLarge: '//yukap6.github.io/images/empty.png',
    prefixCls: 'eui-empty-data',
    theme: 'default',
    style: {},
    className: '',
    type: 'medium',
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
    } = this.props;

    const iconMap = {
      small: iconSmall,
      medium: icon,
      large: iconLarge,
    };

    return (
      <div
        className={classnames({ [`${prefixCls} ${type}`]: true }, { [className]: !!className })}
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
