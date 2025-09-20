 // Example questions (should be stored per user in real app)
    const questions = [
      "What is your mother's maiden name?",
      "What was your first pet's name?",
      "What city were you born in?"
    ];

    // Get username from localStorage
    const username = localStorage.getItem('resetUser');
    if (!username) {
      document.getElementById('secret-error').textContent = "Session expired. Please start again.";
      setTimeout(() => window.location.href = "forget.html", 1500);
    } else {
      // Get user data
      const userData = localStorage.getItem(username);
      let user = {};
      if (userData) user = JSON.parse(userData);

      // Pick a question (for demo, pick first; in real app, store user's question/answer)
      let questionIndex = 0;
      if (user.secretQuestionIndex !== undefined) {
        questionIndex = user.secretQuestionIndex;
      } else {
        // If not set, assign one randomly and save
        questionIndex = Math.floor(Math.random() * questions.length);
        user.secretQuestionIndex = questionIndex;
        // For demo, set a default answer if not set
        if (!user.secretAnswer) user.secretAnswer = "demoanswer";
        localStorage.setItem(username, JSON.stringify(user));
      }
      document.getElementById('question-container').textContent = questions[questionIndex];

      document.getElementById('secret-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const answer = document.getElementById('secret-answer').value.trim().toLowerCase();
        const error = document.getElementById('secret-error');
        if (answer === user.secretAnswer.toLowerCase()) {
          window.location.href = "newpass.html";
        } else {
          error.textContent = "Incorrect answer. Try again.";
          setTimeout(() => error.textContent = "", 2000);
        }
      });
    }