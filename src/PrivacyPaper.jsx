import React from 'react';
import { Helmet } from 'react-helmet';
import PrivacyVoteDoc from '../img/620_privacy_paper_Eoin_McDonnell_v8.pdf';

function PrivacyPaper() {
  return (
    <div>
      <Helmet>
        <title>Privacy in Electronic Voting Systems</title>
        <meta property="og:title" content="Privacy in Electronic Voting Systems" />
        <meta property="og:description" content="An in-depth look into privacy and security for electronic voting systems." />
        <meta property="og:image" content="https://eoin-mcdonnell.vercel.app/assets/cover_image.jpg" />
        <meta property="og:url" content="https://eoin-mcdonnell.vercel.app/privacy-paper" />
        <meta property="og:type" content="article" />
      </Helmet>
      {/* Apply the custom class for the title */}
      <h1 className="paper-title">Privacy in Electronic Voting Systems</h1>
      <iframe
        src={PrivacyVoteDoc}  // Using the imported PDF variable here
        width="100%"
        height="800px"
        title="Privacy in Electronic Voting Systems"
      />
    </div>
  );
}

export default PrivacyPaper;