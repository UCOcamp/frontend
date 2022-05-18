import Link from "next/link";

export const CourseBlock = () => {
  return (
    <div className="video-container">
      <div className="video">
        <img src="/portada.jpg" className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h4 className="title">
              Angular desde 0
            </h4>
            <p className="channel-name">Aula de Software Libre</p>
          </div>
        </div>
      </div>
    </div>
  );
};
