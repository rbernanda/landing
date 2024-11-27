require('dotenv').config();

/** Custom error class representing missing required environment variables. */
class MissingEnvironmentVariablesError extends Error {
  /**
   * @param missingEnvVarNames - An array of missing environment variable names.
   */
  constructor(missingEnvVarNames) {
    super(
      `Missing required environment variables: ${missingEnvVarNames.join(
        ', ',
      )}.`,
    );
    this.name = 'MissingEnvironmentVariablesError';
  }
}

/**
 * Checks if the required environment variables are present in the provided dictionary.
 *
 * @param envVarDict - An object containing environment variables as key-value pairs.
 * @param requiredEnvVarNames - An array of required environment variable names to check.
 * @throws {MissingEnvironmentVariablesError} If any of the required environment variables are missing.
 */
const checkEnvVars = (envVarDict, requiredEnvVarNames) => {
  /** An array to store the names of missing environment variables. */
  const missingEnvVarNames = [];

  for (const requiredEnvVarName of requiredEnvVarNames) {
    if (
      !(requiredEnvVarName in envVarDict) ||
      !envVarDict[requiredEnvVarName]
    ) {
      missingEnvVarNames.push(requiredEnvVarName);
    }
  }

  if (missingEnvVarNames.length > 0) {
    throw new MissingEnvironmentVariablesError(missingEnvVarNames);
  }
};

const REQUIRED_ENV_VAR_NAMES = ['NEXT_PUBLIC_BASE_API_URL'];
checkEnvVars(process.env, REQUIRED_ENV_VAR_NAMES);
