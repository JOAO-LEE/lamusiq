export const formatAmericanDate = (dateString: string | undefined) => {
  if (dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  }
};

export const getYear = (dateString: string) => new Date(dateString).getFullYear();
