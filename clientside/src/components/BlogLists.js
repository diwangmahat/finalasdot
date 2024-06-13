import React, { useState } from "react";
import BlogPost from "./BlogPosts";
import BlogPreview from "./BlogPreview";
import "./BlogPostStyle.css";


const BlogList = () => {
  const posts = [
    {
      title: "Designing for User Experience: Key Principles to Follow",
      date: "May 20, 2024",
      previewContent: "In today's digital age, user experience (UX) is paramount...",
      mainContent: (
        <div>
          <p>In today's digital age, user experience (UX) is paramount. A well-designed product not only looks good but also provides an intuitive and satisfying experience for users. But what exactly does it mean to design for user experience? Here are some key principles to follow to ensure your design not only meets but exceeds user expectations.</p>
          <h2>1. Understand Your Users</h2>
          <h3>Conduct Thorough User Research</h3>
          <p>Before you start designing, you need to understand who your users are, what they need, and how they interact with your product. Conducting user research through surveys, interviews, and usability testing can provide invaluable insights. Create user personas to represent different segments of your audience, and use these personas to guide your design decisions.</p>
          <h3>Empathy is Key</h3>
          <p>Empathy allows you to step into your users' shoes and see the world from their perspective. This mindset helps you to design products that are not only functional but also emotionally resonant. By understanding users' pain points and desires, you can create solutions that genuinely improve their lives.</p>
          <h2>2. Prioritize Usability</h2>
          <h3>Simplify the User Interface</h3>
          <p>A clean, simple interface reduces cognitive load and makes it easier for users to accomplish their goals. Avoid clutter by focusing on essential elements and removing unnecessary features. Use clear and concise language, and ensure that your design is intuitive and easy to navigate.</p>
          <h3>Consistency is Crucial</h3>
          <p>Consistency in design creates a sense of familiarity and predictability for users. Use consistent visual elements, such as colors, fonts, and icons, throughout your product. Consistent navigation patterns and interaction behaviors help users feel more comfortable and confident as they use your product.</p>
          <h2>3. Focus on Accessibility</h2>
          <h3>Design for All Users</h3>
          <p>Accessibility should be a fundamental consideration in UX design. Ensure that your product can be used by people with a wide range of abilities and disabilities. This includes providing keyboard navigation, using high-contrast color schemes, and including alt text for images. Designing for accessibility not only helps users with disabilities but also improves the overall usability for everyone.</p>
          <h3>Follow Accessibility Standards</h3>
          <p>Adhering to established accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), can help you create a more inclusive product. Regularly test your product with assistive technologies, such as screen readers, to ensure that it meets accessibility requirements.</p>
          <h2>4. Implement Responsive Design</h2>
          <h3>Optimize for All Devices</h3>
          <p>In today's multi-device world, your product must provide a seamless experience across desktops, tablets, and smartphones. Responsive design ensures that your product adapts to different screen sizes and orientations, providing an optimal user experience regardless of the device being used.</p>
          <h3>Test Across Devices</h3>
          <p>Regularly test your product on various devices and screen sizes to identify and fix any issues. Use responsive design frameworks and tools to streamline this process and ensure a consistent experience for all users.</p>
          <h2>5. Incorporate Feedback Loops</h2>
          <h3>Gather User Feedback</h3>
          <p>Continuous improvement is a key aspect of successful UX design. Regularly gather feedback from users through surveys, feedback forms, and usability tests. This feedback provides valuable insights into how users interact with your product and where improvements are needed.</p>
          <h3>Iterate and Improve</h3>
          <p>Use the feedback you gather to make informed design decisions and iteratively improve your product. Adopt an agile approach to design, where you continuously test, learn, and refine your product based on user feedback.</p>
          <h2>6. Focus on Performance</h2>
          <h3>Speed Matters</h3>
          <p>A slow, laggy product can frustrate users and drive them away. Optimize your product's performance by minimizing load times and ensuring smooth interactions. Use performance testing tools to identify and fix bottlenecks that could negatively impact the user experience.</p>
          <h3>Keep it Lightweight</h3>
          <p>Avoid bloat by keeping your product lightweight and efficient. This can be achieved through techniques such as lazy loading, optimizing images and assets, and minimizing the use of heavy scripts and plugins.</p>
          <h2>7. Create Delightful Experiences</h2>
          <h3>Add Microinteractions</h3>
          <p>Microinteractions are small, subtle animations or feedback that enhance the user experience. These can include button animations, loading indicators, or subtle sound effects. When done well, microinteractions can make your product feel more responsive and engaging.</p>
          <h3>Surprise and Delight</h3>
          <p>Adding unexpected, delightful elements can create a memorable user experience. This could be a fun Easter egg, a personalized message, or a visually pleasing animation. These small touches can leave a lasting positive impression on users.</p>
          <h2>Conclusion</h2>
          <p>Designing for user experience is an ongoing process that requires a deep understanding of your users and a commitment to continuous improvement. By following these key principles, you can create products that are not only functional but also enjoyable and accessible. Remember, a great user experience is one of the most powerful tools you have to differentiate your product and build a loyal user base. Keep your users at the heart of your design process, and success will follow.</p>
        </div>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x400"
    },
    {
      title: "The Importance of Clean Code in Software Development",
      date: "May 21, 2024",
      previewContent: "In software development, clean code is crucial...",
      mainContent: (
        <div>
          <p>In software development, clean code is crucial for creating maintainable and efficient software. Clean code is not just about making the code work; it’s about making the code understandable and manageable. Here are some key principles to keep in mind when striving for clean code:</p>
          <h2>1. Write Readable Code</h2>
          <p>Readable code is easier to understand and maintain. Use meaningful variable names, consistent formatting, and clear comments to make your code more readable. Remember, your code will be read more often than it is written.</p>
          <h2>2. Keep It Simple</h2>
          <p>Simplicity is key to clean code. Avoid unnecessary complexity and aim for straightforward solutions. This not only makes your code easier to understand but also reduces the likelihood of bugs and errors.</p>
          <h2>3. Follow Conventions</h2>
          <p>Adhering to established coding conventions and best practices helps ensure consistency across your codebase. This makes it easier for others to read and understand your code, and helps avoid common pitfalls.</p>
          <h2>4. Refactor Regularly</h2>
          <p>Regular refactoring is essential to maintaining clean code. Take the time to revisit and improve existing code, removing duplication and optimizing performance. This keeps your codebase healthy and manageable over time.</p>
          <h2>5. Write Tests</h2>
          <p>Automated tests are a vital part of clean code. They help ensure your code works as expected and can catch issues early in the development process. Write tests for your code and run them regularly to maintain code quality.</p>
          <h2>6. Document Your Code</h2>
          <p>Good documentation is essential for clean code. Provide clear, concise documentation for your code, including how to use it and any important details. This helps others understand your code and use it correctly.</p>
          <h2>7. Keep Learning</h2>
          <p>Software development is an ever-evolving field. Stay up-to-date with the latest best practices, tools, and techniques. Continuously improve your skills and strive for clean, maintainable code.</p>
          <h2>Conclusion</h2>
          <p>Clean code is the foundation of high-quality software. By following these principles, you can write code that is easy to understand, maintain, and extend. Remember, the goal of clean code is to make your software more reliable, efficient, and enjoyable to work with. Keep these principles in mind as you write and review code, and you’ll be well on your way to creating clean, high-quality software.</p>
        </div>
      ),
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x400"
    },
    {
      title: "Effective Digital Marketing Strategies for Small Businesses",
      date: "May 22, 2024",
      previewContent: "Digital marketing is essential for small businesses...",
      mainContent: (
        <div>
          <p>Digital marketing is essential for small businesses to reach their target audience and compete with larger companies. Here are some effective digital marketing strategies that can help small businesses grow:</p>
          <h2>1. Utilize Social Media</h2>
          <p>Social media platforms are powerful tools for small businesses. They allow you to connect with your audience, share content, and build a community. Choose the platforms that best suit your business and engage with your audience regularly.</p>
          <h2>2. Invest in SEO</h2>
          <p>Search engine optimization (SEO) helps your website rank higher in search engine results, driving more organic traffic to your site. Invest in SEO best practices, such as keyword research, on-page optimization, and link building, to improve your online visibility.</p>
          <h2>3. Use Email Marketing</h2>
          <p>Email marketing is an effective way to reach your audience directly. Build an email list and send regular newsletters with valuable content, promotions, and updates. Personalize your emails to increase engagement and conversion rates.</p>
          <h2>4. Create Quality Content</h2>
          <p>High-quality content is crucial for attracting and retaining customers. Create valuable, informative, and engaging content that addresses your audience's needs and interests. Use a mix of blog posts, videos, infographics, and other formats to keep your content fresh and interesting.</p>
          <h2>5. Leverage Paid Advertising</h2>
          <p>Paid advertising, such as Google Ads and social media ads, can help you reach a larger audience and drive targeted traffic to your website. Set a budget, choose your target audience, and create compelling ads that encourage clicks and conversions.</p>
          <h2>6. Monitor and Analyze Performance</h2>
          <p>Regularly monitor and analyze the performance of your digital marketing efforts. Use tools like Google Analytics and social media insights to track your progress and identify areas for improvement. Adjust your strategies based on the data to optimize your results.</p>
          <h2>Conclusion</h2>
          <p>Effective digital marketing is essential for small businesses to thrive in a competitive landscape. By utilizing social media, investing in SEO, leveraging email marketing, creating quality content, using paid advertising, and monitoring performance, you can build a strong online presence and reach your target audience. Stay adaptable and continuously refine your strategies to achieve the best results.</p>
        </div>
      ),
      imageUrl:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x400"
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-container">
      {selectedPost === null ? (
        <div className="blog-previews">
          {posts.map((post, index) => (
            <BlogPreview
              key={index}
              post={post}
              onClick={() => setSelectedPost(index)}
            />
          ))}
        </div>
      ) : (
        <div className="selected-blog">
          <div className="main-blog">
            <BlogPost
              title={posts[selectedPost].title}
              date={posts[selectedPost].date}
              content={posts[selectedPost].mainContent}
              imageUrl={posts[selectedPost].imageUrl}
            />
          </div>
          <div className="other-blogs">
            <h3>Other Interesting Blogs</h3>
            {posts
              .filter((_, index) => index !== selectedPost)
              .map((post, index) => (
                <BlogPreview
                  key={index}
                  post={post}
                  onClick={() => setSelectedPost(posts.indexOf(post))}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
