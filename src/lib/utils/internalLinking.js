const linkMap = {
  "ai skripsi": "/blog/aplikasi-ai-untuk-membuat-latar-belakang-skripsi",
  "tools ai skripsi": "/blog/aplikasi-ai-untuk-membuat-latar-belakang-skripsi",

  "prompt skripsi": "/blog/prompt-ai-mahasiswa-skripsi",
  "prompt chatgpt": "/blog/prompt-ai-mahasiswa-skripsi",

  "deteksi tulisan ai": "/blog/cara-dosen-bisa-mendeteksi-tulisan-ai",
  "ai detector": "/blog/cara-dosen-bisa-mendeteksi-tulisan-ai",

  "rubrik penilaian": "/blog/cara-membuat-rubrik-penilaian-dengan-ai",
  "penilaian mahasiswa": "/blog/cara-membuat-rubrik-penilaian-dengan-ai",

  "ai dalam pendidikan": "/blog/pengaruh-ai-terhadap-pendidikan-dan-dunia-kerja",
  "teknologi pendidikan": "/blog/pengaruh-ai-terhadap-pendidikan-dan-dunia-kerja"
};

export function autoInternalLinks(content) {
  let result = content;
  let count = 0;

  Object.entries(linkMap).forEach(([keyword, url]) => {

    if (count >= 5) return;

    const regex = new RegExp(`\\b${keyword}\\b`, "i");

    if (regex.test(result)) {
      result = result.replace(
        regex,
        `<a href="${url}" class="internal-link">${keyword}</a>`
      );

      count++;
    }

  });

  return result;
}
