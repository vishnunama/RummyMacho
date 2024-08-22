import React, { useEffect } from 'react';
// import './RefundPolicy.css'; // Ensure you have this CSS file

function RefundPolicy() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{marginTop:"200px", marginBottom:"200px"}} className="refund-policy-container">
      <h2>Refund Policy</h2>
      <p style={{color:"black"}}>At Rummymacho, we strive to address accidental or erroneous cash credits promptly. If you encounter such issues, you may request a refund within two weeks of the transaction. We will review your request and process the refund to the original financial source within two weeks if it's a valid case of error. Please note that all refund decisions are at the sole discretion of Rummymacho.</p>
      
      <h3>1. Eligibility for Refund</h3>
      <p>1.1. Refunds may be issued under the following circumstances:</p>
      <ul>
        <li>Unauthorized Transactions: If there is evidence of unauthorized transactions or fraudulent activity on your account.</li>
        <li>Processing Errors: If an error occurred during the transaction, such as overcharging or double charging.</li>
        <li>Technical Issues: If you face technical difficulties that prevent access to or use of our services, and we fail to resolve them within a reasonable time frame.</li>
        <li>Service Cancellation: If a deposit was made for a service that was not provided or was canceled by us.</li>
      </ul>
      <p>1.2. Refunds are generally not provided for:</p>
      <ul>
        <li>Voluntary Cancellations: If you voluntarily cancel services or purchases.</li>
        <li>Game Outcomes: Disputes over game results or player performance.</li>
        <li>Cash Game Losses: Losses incurred during cash games or tournaments.</li>
        <li>Policy Violations: Failure to adhere to our Terms of Service or other policies.</li>
      </ul>
      
      <h3>2. How to Request a Refund</h3>
      <p>2.1. To request a refund, contact our customer support team at <a style={{color:"blue"}} href="mailto:support@Rummymacho.com">support@Rummymacho.com</a> within a reasonable period from the date of the transaction.</p>
      <p>2.2. Provide necessary details, including your account information, transaction ID, a description of the issue, and any relevant evidence.</p>
      
      <h3>3. Refund Processing</h3>
      <p>3.1. After receiving and reviewing your refund request, we will determine eligibility based on our Refund Policy.</p>
      <p>3.2. Approved refunds will be processed within a reasonable time frame. The refund method and timing may vary based on the original payment method and other factors.</p>
      <p>3.3. Refunds will typically be issued in the same currency and through the same payment method used for the original transaction.</p>
      
      <h3>4. Dispute Resolution</h3>
      <p>4.1. If you disagree with our refund decision, you may escalate the issue by contacting our customer support team or submitting a formal complaint through our designated channels.</p>
      <p>4.2. We strive to resolve disputes and address concerns fairly and promptly.</p>
      
      <h3>Cancellation of Games</h3>
      <p>Rummymacho is not liable for losses due to game cancellations caused by service outages, technical failures, natural disasters, or other factors beyond our control. Refunds are not available for games canceled due to circumstances beyond our reasonable control.</p>
      
      <h3>Online Transactions</h3>
      <p>Transactions to credit your Rummymacho account are handled via third-party payment gateways. Rummymacho is not responsible for any transaction denials or rejections as they are governed by the third-party gateway’s terms. We may reverse transactions and refund the amount to the original payment method used.</p>
      
      <h3>Responsible Gaming</h3>
      <p>We promote responsible gaming and take several measures to ensure a safe gaming environment:</p>
      <ul>
        <li>Users must be at least 18 years old to create an account or play.</li>
        <li>We use 24/7 monitoring and anti-fraud algorithms to detect unfair play.</li>
        <li>Collusion detection is implemented in every game.</li>
        <li>Player information is securely stored with high-level encryption.</li>
        <li>Deposit limits are in place to prevent irresponsible gaming.</li>
        <li>KYC verification ensures player protection and game security.</li>
        <li>We provide alerts to players showing excessive gaming behavior.</li>
        <li>Users can self-exclude from our games for 48 hours to 6 months and cannot create another account during this period. Self-exclusion periods cannot be reversed or modified once confirmed.</li>
      </ul>
      
      <h3>Voluntary Termination of Account</h3>
      <p>To terminate your account, email us with a clear intention to cease using our services. We will evaluate your request and, at our discretion, process the account termination and refund the available balance within 21 working days. Any account activity after your termination request will be deemed your responsibility.</p>
      
      <h3>Inactive Accounts and Unused Funds</h3>
      <p style={{color:"black"}}>If your account remains inactive for over 365 days with an unused balance, we will send reminders to activate it via email and SMS. To reactivate, you must log in, play, or make a deposit or withdrawal. Failure to activate after reminders will result in forfeiture of your balance at Rummymacho’s discretion. Accounts violating our Terms of Service will not receive reminders, and unused funds will be handled according to our Breach and Consequences policy.</p>
      
      <h3>Complaints & Disputes</h3>
      <p style={{color:"black"}}>If you have a complaint or dispute, please contact our customer support team at <a href="mailto:support@Rummymacho.com">support@Rummymacho.com</a>. It is important to address any issues promptly for a quicker resolution. Rummymacho is committed to resolving complaints promptly and will make every effort to address your concerns. Please note that Rummymacho's decision on any complaint is final and binding. We expect players to keep the details of the resolution confidential and not disclose any information to third parties.</p>
      
      <h3>Fair Play Policy</h3>
      <p style={{color:"black"}}>At Rummymacho, we are committed to upholding the highest standards of fair play and integrity in all our games. Our goal is to ensure that every player has an equal opportunity to compete and win on our platform. To maintain a secure and equitable environment, we rigorously monitor user activities, including deposits, identity verification, gameplay, and individual hands.</p>
      
      <h4>1. Fair Play Standards</h4>
      <p style={{color:"black"}}>1.1 Anti-Cheating and Anti-Collusion</p>
      <ul>
        <li style={{color:"black"}}>Individual Participation: All games on Rummymacho are intended to be played individually. Use of any external aids or third-party software, including cheats, bots, or hacks, to alter gameplay is strictly forbidden. You must not use software that intercepts, collects, or mines data from our platform or services. Any attempt to gain an unfair advantage using such means is prohibited.</li>
        <li style={{color:"black"}}>Collusion: Creating or participating in teams to collude or cheat is strictly prohibited. Rummymacho enforces a zero-tolerance policy for any breaches of our Fair Play Policy, and offending players may face restrictions or permanent bans from our platform.</li>
      </ul>
      
      <p>1.2 Money Laundering</p>
      <p>You are prohibited from engaging in any activities that may be considered money laundering. This includes withdrawing money added via credit cards, UPI, net banking, or other methods without participating in cash games, and deliberately losing money to specific players.</p>
      
      <p>1.3 Anti-Spamming</p>
      <p>Sending unsolicited communications or spam to obtain registrations or benefits is prohibited. Additionally, using Rummymacho for commercial purposes, including selling services or products, is not allowed.</p>
      
      <p>1.4 Multiple Accounts</p>
      <p>You are permitted only one user account. Creating or using multiple accounts to access Rummymacho services is not allowed. If your username is found to be inappropriate or offensive, we will ask you to choose an alternative. Failure to provide a new username may result in a permanent suspension or reactivation of your account only after a new, acceptable username is provided.</p>
      
      <p>1.5 Technical Manipulation</p>
      <p>You must not attempt to host, intercept, emulate, or redirect proprietary communication protocols used by Rummymacho. Modification or reverse engineering of our platform is also prohibited.</p>
      
      <p>1.6 Content Modification</p>
      <p>You must not frame, modify, or remove any proprietary notices from the Rummymacho website or app. Posting unauthorized commercial material or altering the content is prohibited.</p>
      
      <p>1.7 Commercial Use</p>
      <p>You may not use our platform for commercial purposes, including operating a gaming center, network play over the internet, or connecting to unauthorized servers.</p>
      
      <p>1.8 Prohibited Activities</p>
      <p>Use of automated tools or scripts to manipulate, exploit, or adversely affect the game or services is not allowed. This includes using multiple accounts for personal gain or to affect gameplay.</p>
      
      <h4>2. Consequences</h4>
      <p>2.1 Breach of Fair Play</p>
      <p>If we detect any violations of our Fair Play Policy, we will take action based on the severity of the breach. Actions may include account suspension or termination, freezing of funds, and reporting to relevant authorities.</p>
      
      <p>2.2 Reinstatement</p>
      <p>We may reinstate your account at our sole discretion, provided you agree to comply with our Fair Play Policy and any additional terms. Failure to adhere to these terms may result in further disciplinary action.</p>
      
      <h4>3. Appeals and Complaints</h4>
      <p>If you wish to appeal a decision or file a complaint regarding a Fair Play issue, please contact our customer support team. All appeals and complaints will be reviewed and addressed according to our internal procedures.</p>
      
      <p>By using our services, you agree to adhere to the Fair Play Policy and any updates that may be made from time to time. For more information, please refer to our Terms and Conditions and Privacy Policy.</p>
    </div>
  );
}

export default RefundPolicy;
