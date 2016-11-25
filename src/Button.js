import  React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const propTypes = {
  /**
   * @title 尺寸
   */
  size: PropTypes.oneOf(['sm', 'xg', 'lg']),
  /**
   * @title 样式
   */
  style: PropTypes.object,
  /**
   * @title 形状
   */
  shape: PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', 'border']),
   /**
   * @title 类型
   */
  color: PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger']),
  /**
   * @title 是否禁用
   * @veIgnore
   */
  disabled: PropTypes.bool,
  /**
   * @title 类名
   * @veIgnore
   */
  className: PropTypes.string,

  /**
   * @title <button> 的 type
   * @veIgnore
   */
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
}

const defaultProps = {
  disabled: false,
  htmlType: 'button',
  clsPrefix: 'u-button'

}

const sizeMap = {
        sm: 'sm',
        xg: 'xg',
        lg: 'lg'
    },
    colorMap = {
        primary: 'primary',
        accent: 'accent',
        success: 'success',
        info: 'info',
        warning: 'warning',
        danger: 'danger'
    },
    shapeMap = {
        block: 'block',
        round: 'round',
        border: 'border',
        squared: 'squared',
        floating: 'floating',
        pillRight: 'pill-right',
        pillLeft: 'pill-left'
    };


class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {color,
            shape,
            disabled,
            className,
            size,
            children,
            htmlType,
            clsPrefix,
            ...others} = this.props;
        let clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[`${clsPrefix}-${sizeMap[size]}`] = true;
        }
        if (shapeMap[shape]) {
            clsObj[`${clsPrefix}-${shapeMap[shape]}`] = true;
        }
        if (colorMap[color]) {
            clsObj[`${clsPrefix}-${colorMap[color]}`] = true;
        }
        let classes = classnames(clsPrefix, clsObj);
        return (
            <button
                type={htmlType}
                className={classes}
                disabled={disabled}
                {...others}>
              {this.props.children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
