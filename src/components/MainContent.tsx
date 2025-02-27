import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, RefreshCw, Zap, Link, ExternalLink } from 'lucide-react';

const MainContent: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Understanding <span className="text-primary">Trezor Bridge</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The essential software for connecting your Trezor hardware wallet to your computer
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <motion.article
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">What is Trezor Bridge?</h3>
              <p>
                <strong>Trezor Bridge</strong> is a communication tool that facilitates the connection between your Trezor hardware wallet and your computer's web browser. This essential software serves as a secure channel for transmitting data between your device and the Trezor Wallet web interface, ensuring that your cryptocurrency transactions are both safe and efficient.
              </p>
              <p>
                Unlike traditional software wallets that store your private keys on your computer, <strong>Trezor Bridge</strong> works with your hardware wallet to keep your private keys isolated and protected from online threats. This critical layer of security is what makes hardware wallets like Trezor the preferred choice for serious cryptocurrency investors and enthusiasts.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">Why Trezor Bridge is Essential</h3>
              <p>
                Your <a href="https://trezor.io" className="text-primary hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">Trezor hardware wallet <ExternalLink size={16} className="ml-1" /></a> is designed to keep your private keys offline and secure. However, to interact with the blockchain and manage your assets, you need a way to connect your device to the internet. This is where <strong>Trezor Bridge</strong> comes in.
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Security:</strong> <strong>Trezor Bridge</strong> ensures that all communications between your hardware wallet and computer remain encrypted and secure.
                </li>
                <li>
                  <strong>Convenience:</strong> It provides a seamless user experience by enabling direct communication between your web browser and Trezor device.
                </li>
                <li>
                  <strong>Compatibility:</strong> <strong>Trezor Bridge</strong> works across multiple operating systems, including Windows, macOS, and Linux.
                </li>
                <li>
                  <strong>Reliability:</strong> Regular updates ensure that <strong>Trezor Bridge</strong> remains compatible with the latest firmware and security protocols.
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">How Trezor Bridge Works</h3>
              <p>
                <strong>Trezor Bridge</strong> operates as a background service on your computer, establishing a secure connection between your web browser and your Trezor hardware wallet. Here's how the process works:
              </p>
              <ol className="list-decimal pl-6 space-y-2 my-4">
                <li>
                  You connect your Trezor device to your computer via USB.
                </li>
                <li>
                  <strong>Trezor Bridge</strong> detects the connected device and establishes a secure communication channel.
                </li>
                <li>
                  When you access the Trezor Wallet web interface, it communicates with your hardware wallet through <strong>Trezor Bridge</strong>.
                </li>
                <li>
                  All sensitive operations, such as transaction signing, occur on the Trezor device itself, not on your computer.
                </li>
                <li>
                  <strong>Trezor Bridge</strong> simply relays the information between your browser and device, never handling your private keys.
                </li>
              </ol>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">Installing Trezor Bridge</h3>
              <p>
                Setting up <strong>Trezor Bridge</strong> is straightforward and essential for using your Trezor hardware wallet. The installation process varies slightly depending on your operating system:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Windows:</strong> Download the installer from the official Trezor website and follow the installation wizard.
                </li>
                <li>
                  <strong>macOS:</strong> Download the macOS package and follow the installation prompts. You may need to adjust your security settings to allow the installation.
                </li>
                <li>
                  <strong>Linux:</strong> Use the package manager for your distribution or download the appropriate package from the Trezor website.
                </li>
              </ul>
              <p>
                After installation, <strong>Trezor Bridge</strong> runs as a background service, automatically starting when you boot your computer. This ensures that your Trezor device is always ready to connect when needed.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">Troubleshooting Common Issues</h3>
              <p>
                Even with its robust design, users occasionally encounter issues with <strong>Trezor Bridge</strong>. Here are some common problems and their solutions:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Connection Problems:</strong> If your Trezor device isn't recognized, try using a different USB cable or port. Sometimes, restarting <strong>Trezor Bridge</strong> or your computer can resolve connection issues.
                </li>
                <li>
                  <strong>Outdated Software:</strong> Ensure you're running the latest version of <strong>Trezor Bridge</strong>. Outdated versions may have compatibility issues with newer firmware.
                </li>
                <li>
                  <strong>Browser Compatibility:</strong> <strong>Trezor Bridge</strong> works best with Chrome, Firefox, and Edge. If you're experiencing issues, try switching browsers.
                </li>
                <li>
                  <strong>Firewall Blocking:</strong> Your firewall might be blocking <strong>Trezor Bridge</strong>. Check your firewall settings and add an exception if necessary.
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">Security Considerations</h3>
              <p>
                While <strong>Trezor Bridge</strong> enhances the security of your cryptocurrency transactions, it's important to follow best practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Official Downloads:</strong> Always download <strong>Trezor Bridge</strong> from the official Trezor website to avoid malicious software.
                </li>
                <li>
                  <strong>Regular Updates:</strong> Keep <strong>Trezor Bridge</strong> updated to benefit from the latest security improvements.
                </li>
                <li>
                  <strong>Verify Connections:</strong> When connecting your Trezor device, always verify the information displayed on its screen before confirming transactions.
                </li>
                <li>
                  <strong>Secure Environment:</strong> Use <strong>Trezor Bridge</strong> on a secure, malware-free computer to minimize risks.
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">The Future of Trezor Bridge</h3>
              <p>
                As cryptocurrency technology evolves, so does <strong>Trezor Bridge</strong>. The development team regularly updates the software to improve security, add features, and enhance compatibility with new cryptocurrencies and blockchain technologies.
              </p>
              <p>
                Recent updates to <strong>Trezor Bridge</strong> have focused on improving the user experience, reducing connection times, and strengthening security protocols. Future developments may include support for additional communication protocols and integration with more third-party services.
              </p>
              <p>
                By using <strong>Trezor Bridge</strong>, you're not just securing your current cryptocurrency holdings—you're investing in a solution that will continue to evolve with the rapidly changing digital asset landscape.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-primary mb-4">Conclusion</h3>
              <p>
                <strong>Trezor Bridge</strong> is more than just a utility software—it's a crucial component in the secure management of your digital assets. By providing a secure connection between your hardware wallet and computer, it enables you to interact with the blockchain while keeping your private keys protected.
              </p>
              <p>
                Whether you're a cryptocurrency novice or an experienced investor, understanding and properly using <strong>Trezor Bridge</strong> is essential for maintaining the security of your digital wealth. With its combination of security, convenience, and reliability, <strong>Trezor Bridge</strong> remains the preferred connection method for Trezor hardware wallet users worldwide.
              </p>
              <p>
                For more information about <strong>Trezor Bridge</strong> and how to get the most out of your Trezor hardware wallet, visit the <a href="https://trezor.io/learn" className="text-primary hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">official Trezor learning resources <ExternalLink size={16} className="ml-1" /></a>.
              </p>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default MainContent;