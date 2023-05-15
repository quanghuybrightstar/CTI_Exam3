import styles from './styles.module.scss';
import { Layout } from 'antd';
import { BsFillBalloonHeartFill } from 'react-icons/bs';

const { Footer } = Layout;

const FooterContainer: React.FC = () => {
  return (
    <Footer className={styles.footer_container}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer_left}>
          <a href="#" className={styles.footer__topic}>
            {' '}
            QUANG HUY
          </a>
          <a href="#" className={styles.footer__topic}>
            {' '}
            BLOG
          </a>
          <a href="#" className={styles.footer__topic}>
            {' '}
            LICENSES
          </a>
        </div>
        <div className={styles.footer_right}>
          <span>© 2023, made with</span>
          <BsFillBalloonHeartFill
            className={styles.footer__icon_heart}
          ></BsFillBalloonHeartFill>
          <span>by Creative Tim</span>
        </div>
      </div>
    </Footer>
  );
};

export default FooterContainer;
