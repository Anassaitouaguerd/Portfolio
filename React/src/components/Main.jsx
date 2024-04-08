import SectionFormation from "./SectionsComponents/SectionFormation";
import SectionExperience from "./SectionsComponents/SectionExperience";
import SectionDescription from "./SectionsComponents/SectionDescription";
export default function Main() {
  return (
    <div className="main">
      <SectionDescription />
      <SectionFormation />
      <SectionExperience />
    </div>
  );
}
