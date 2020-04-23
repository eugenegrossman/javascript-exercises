const palindromes = function(string) {
    // replaces everything outsize of a-z  with a space, globally (/g flag)
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
  };

module.exports = palindromes
