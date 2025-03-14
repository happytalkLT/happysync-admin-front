import styles from './styles.module.css';
import global_styles from '../featureGlobalStyles.module.css';

export const AppFeature = () => {
  return (
    <div className={global_styles.container}>
      <div className={global_styles.block}>
        APP 관리 페이지 블럭 1.
      </div>
      <div className={global_styles.block}>
        APP 관리 페이지 블럭 2.
      </div>
    </div>
  );
};