import SectionFormation from "./SectionsComponents/SectionFormation";
import SectionExperience from "./SectionsComponents/SectionExperience";
import SectionDescription from "./SectionsComponents/SectionDescription";
import SectionAllProject from "./SectionsComponents/SectionAllProject";
export default function Main() {
  return (
    <div className="main">
      <SectionDescription />
      <SectionFormation />
      <SectionExperience />
      <SectionAllProject />
    </div>
  );
}
