import ARPersonalPageContainer from "../../components/ARPersonalPageContainer/ARPersonalPageContainer";
import { ARFooter, ARHeader } from "../../library";
import "./personalPage.less";

interface PersonalPageProps {

}

const PersonalPage = (props: PersonalPageProps) => {
  return (
    <div className="personal-page-wrapper">

      <div className="personal-page__header">
        <ARHeader />
      </div>

      <div className="personal-page__content">
        <div className="personal-page__content-container">
          <ARPersonalPageContainer />
        </div>
      </div>

      <div className="personal-page__footer">
        <ARFooter />
      </div>

    </div>
  );
};

export default PersonalPage;