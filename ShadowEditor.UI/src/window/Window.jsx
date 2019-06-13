import './css/Window.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

/**
 * 窗口
 */
class Window extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, style, title, children, width, height } = this.props;

        const _style = Object.assign({}, style, {
            left: `calc(50% - ${width} / 2)`,
            top: `calc(50% - ${height} / 2)`,
            width: width,
            height: height,
        });

        return <div className={classNames('Window', className)} style={_style}>
            <div className={'wrap'}>
                <div className={'title'}>
                    <span>{title}</span>
                    <div className={'controls'}>
                        <i className={'iconfont icon-close icon'}></i>
                    </div>
                </div>
                <div className={'content'}>{children}</div>
                <div className={'buttons'}>
                    <div className={'button-wrap'}>
                        <button className={'button'}>OK</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

Window.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.node,
    width: PropTypes.string,
    height: PropTypes.string,
};

Window.defaultProps = {
    className: null,
    style: null,
    title: 'Window',
    children: null,
    width: '600px',
    height: '400px',
};

export default Window;